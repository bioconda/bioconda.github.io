:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'finemap'
.. highlight: bash

finemap
=======

.. conda:recipe:: finemap
   :replaces_section_title:
   :noindex:

   Program for identifying causal SNPs and their effect sizes and heritability contributions

   :homepage: http://www.christianbenner.com
   :license: Other
   :recipe: /`finemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finemap/meta.yaml>`_

   


.. conda:package:: finemap

   |downloads_finemap| |docker_finemap|

   :versions:
      
      

      ``1.4.1-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install finemap

   and update with::

      conda update finemap

   or use the docker container::

      docker pull quay.io/biocontainers/finemap:<tag>

   (see `finemap/tags`_ for valid values for ``<tag>``)


.. |downloads_finemap| image:: https://img.shields.io/conda/dn/bioconda/finemap.svg?style=flat
   :target: https://anaconda.org/bioconda/finemap
   :alt:   (downloads)
.. |docker_finemap| image:: https://quay.io/repository/biocontainers/finemap/status
   :target: https://quay.io/repository/biocontainers/finemap
.. _`finemap/tags`: https://quay.io/repository/biocontainers/finemap?tab=tags


.. raw:: html

    <script>
        var package = "finemap";
        var versions = ["1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/finemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/finemap/README.html