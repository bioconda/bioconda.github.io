:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymzml'
.. highlight: bash

pymzml
======

.. conda:recipe:: pymzml
   :replaces_section_title:

   high\-throughput mzML parsing

   :homepage: http://pymzml.github.com
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`pymzml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymzml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymzml/meta.yaml>`_
   :links: biotools: :biotools:`pymzml`

   


.. conda:package:: pymzml

   |downloads_pymzml| |docker_pymzml|

   :versions: 2.4.0-0, 2.3.1-0, 2.2.5-0, 2.2.4-0, 2.2.3-0, 2.0.6-2, 2.0.6-1, 2.0.6-0, 2.0.5-0, 0.7.10-1, 0.7.10-0, 0.7.8-1, 0.7.8-0, 0.7.7-1, 0.7.7-0, 0.7.5-1, 0.7.5-0
   
   :depends numpy: 
   :depends plotly: 
   :depends python: >3
   :depends regex: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymzml

   and update with::

      conda update pymzml

   or use the docker container::

      docker pull quay.io/biocontainers/pymzml:<tag>

   (see `pymzml/tags`_ for valid values for ``<tag>``)


.. |downloads_pymzml| image:: https://img.shields.io/conda/dn/bioconda/pymzml.svg?style=flat
   :target: https://anaconda.org/bioconda/pymzml
   :alt:   (downloads)
.. |docker_pymzml| image:: https://quay.io/repository/biocontainers/pymzml/status
   :target: https://quay.io/repository/biocontainers/pymzml
.. _`pymzml/tags`: https://quay.io/repository/biocontainers/pymzml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymzml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymzml/README.html