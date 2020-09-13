:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recognizer'
.. highlight: bash

recognizer
==========

.. conda:recipe:: recognizer
   :replaces_section_title:
   :noindex:

   A tool for domain based annotation with the COG database

   :homepage: https://github.com/iquasere/reCOGnizer
   :documentation: https://github.com/iquasere/reCOGnizer/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`recognizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recognizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recognizer/meta.yaml>`_

   reCOGnizer performs domain based annotation with RPS\-BLAST\, using
   Hidden Markov Models \(HMM\) from COG database. It rebuilds COG database
   for multithreaded annotation\, organizes information regarding COG IDs
   and respective categories\, obtains EC numbers using resources from the
   eggNOG database and organizes all this information into TSV and EXCEL
   files for easy handling by users or pipelines. It also produces a Krona
   plot representing the quantification of COG functions identified.



.. conda:package:: recognizer

   |downloads_recognizer| |docker_recognizer|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends blast: 
   :depends krona: 
   :depends lxml: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install recognizer

   and update with::

      conda update recognizer

   or use the docker container::

      docker pull quay.io/biocontainers/recognizer:<tag>

   (see `recognizer/tags`_ for valid values for ``<tag>``)


.. |downloads_recognizer| image:: https://img.shields.io/conda/dn/bioconda/recognizer.svg?style=flat
   :target: https://anaconda.org/bioconda/recognizer
   :alt:   (downloads)
.. |docker_recognizer| image:: https://quay.io/repository/biocontainers/recognizer/status
   :target: https://quay.io/repository/biocontainers/recognizer
.. _`recognizer/tags`: https://quay.io/repository/biocontainers/recognizer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recognizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recognizer/README.html