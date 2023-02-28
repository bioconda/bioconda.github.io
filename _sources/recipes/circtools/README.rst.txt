:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circtools'
.. highlight: bash

circtools
=========

.. conda:recipe:: circtools
   :replaces_section_title:
   :noindex:

   circtools \- a circular RNA toolbox

   :homepage: https://github.com/dieterich-lab/circtools
   :license: GPL-3.0
   :recipe: /`circtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circtools/meta.yaml>`_

   


.. conda:package:: circtools

   |downloads_circtools| |docker_circtools|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends biopython: ``>=1.71``
   :depends htseq: ``>=0.11.0``
   :depends numpy: ``>=1.14.5``
   :depends pandas: ``>=0.25.0``
   :depends pybedtools: ``>=0.7.10``
   :depends pysam: ``>=0.13``
   :depends python: 
   :depends reportlab: ``>=3.3.0``
   :depends scipy: ``>=0.19.0``
   :depends statsmodels: ``>=0.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circtools

   and update with::

      conda update circtools

   or use the docker container::

      docker pull quay.io/biocontainers/circtools:<tag>

   (see `circtools/tags`_ for valid values for ``<tag>``)


.. |downloads_circtools| image:: https://img.shields.io/conda/dn/bioconda/circtools.svg?style=flat
   :target: https://anaconda.org/bioconda/circtools
   :alt:   (downloads)
.. |docker_circtools| image:: https://quay.io/repository/biocontainers/circtools/status
   :target: https://quay.io/repository/biocontainers/circtools
.. _`circtools/tags`: https://quay.io/repository/biocontainers/circtools?tab=tags


.. raw:: html

    <script>
        var package = "circtools";
        var versions = ["1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circtools/README.html