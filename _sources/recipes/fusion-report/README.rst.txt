:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-report'
.. highlight: bash

fusion-report
=============

.. conda:recipe:: fusion-report
   :replaces_section_title:
   :noindex:

   Tool for parsing outputs from fusion detection tools. Part of a nf\-core\/rnafusion pipeline

   :homepage: https://github.com/matq007/fusion-report
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`fusion-report <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-report>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-report/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.2609024`

   


.. conda:package:: fusion-report

   |downloads_fusion-report| |docker_fusion-report|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends colorlog: ``4.0.2``
   :depends jinja2: ``2.10.1``
   :depends python: ``>=3.6``
   :depends python-rapidjson: 
   :depends pyyaml: ``>=4.2b1``
   :depends tqdm: ``4.33.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fusion-report

   and update with::

      conda update fusion-report

   or use the docker container::

      docker pull quay.io/biocontainers/fusion-report:<tag>

   (see `fusion-report/tags`_ for valid values for ``<tag>``)


.. |downloads_fusion-report| image:: https://img.shields.io/conda/dn/bioconda/fusion-report.svg?style=flat
   :target: https://anaconda.org/bioconda/fusion-report
   :alt:   (downloads)
.. |docker_fusion-report| image:: https://quay.io/repository/biocontainers/fusion-report/status
   :target: https://quay.io/repository/biocontainers/fusion-report
.. _`fusion-report/tags`: https://quay.io/repository/biocontainers/fusion-report?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-report/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-report/README.html