:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smallgenomeutilities'
.. highlight: bash

smallgenomeutilities
====================

.. conda:recipe:: smallgenomeutilities/0.2.1
   :replaces_section_title:

   A collection of scripts that are useful for dealing with viral RNA NGS data.

   :homepage: https://github.com/cbg-ethz/smallgenomeutilities
   :license: GPL2 / GNU General Public License v2 or later (GPLv2+)
   :recipe: /`smallgenomeutilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities>`_/`0.2.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities/0.2.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities/0.2.1/meta.yaml>`_

   


.. conda:package:: smallgenomeutilities

   |downloads_smallgenomeutilities| |docker_smallgenomeutilities|

   :versions: 0.2.1-1, 0.2.1-0, 0.1-1, 0.1-0
   
   :depends biopython: 
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends progress: 
   
   :depends pysam: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends scikit-learn: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smallgenomeutilities

   and update with::

      conda update smallgenomeutilities

   or use the docker container::

      docker pull quay.io/repository/biocontainers/smallgenomeutilities:<tag>

   (see `smallgenomeutilities/tags`_ for valid values for ``<tag>``)


.. |downloads_smallgenomeutilities| image:: https://img.shields.io/conda/dn/bioconda/smallgenomeutilities.svg?style=flat
   :alt:   (downloads)
.. |docker_smallgenomeutilities| image:: https://quay.io/repository/biocontainers/smallgenomeutilities/status
   :target: https://quay.io/repository/biocontainers/smallgenomeutilities
.. _`smallgenomeutilities/tags`: https://quay.io/repository/biocontainers/smallgenomeutilities?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smallgenomeutilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smallgenomeutilities/README.html