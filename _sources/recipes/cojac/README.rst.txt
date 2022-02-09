:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cojac'
.. highlight: bash

cojac
=====

.. conda:recipe:: cojac/0.2
   :replaces_section_title:
   :noindex:

   Command\-line tools to analyse co\-occurrence of mutations on amplicons.

   :homepage: https://github.com/cbg-ethz/cojac
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`cojac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cojac>`_/`0.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cojac/0.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cojac/0.2/meta.yaml>`_

   


.. conda:package:: cojac

   |downloads_cojac| |docker_cojac|

   :versions:
      
      

      ``0.2-0``,  ``0.1-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.17``
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends requests: 
   :depends strictyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cojac

   and update with::

      conda update cojac

   or use the docker container::

      docker pull quay.io/biocontainers/cojac:<tag>

   (see `cojac/tags`_ for valid values for ``<tag>``)


.. |downloads_cojac| image:: https://img.shields.io/conda/dn/bioconda/cojac.svg?style=flat
   :target: https://anaconda.org/bioconda/cojac
   :alt:   (downloads)
.. |docker_cojac| image:: https://quay.io/repository/biocontainers/cojac/status
   :target: https://quay.io/repository/biocontainers/cojac
.. _`cojac/tags`: https://quay.io/repository/biocontainers/cojac?tab=tags


.. raw:: html

    <script>
        var package = "cojac";
        var versions = ["0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cojac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cojac/README.html