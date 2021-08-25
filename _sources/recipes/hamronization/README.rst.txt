:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hamronization'
.. highlight: bash

hamronization
=============

.. conda:recipe:: hamronization
   :replaces_section_title:
   :noindex:

   Tool to convert and summarize AMR gene detection outputs using the hAMRonization specification

   :homepage: https://github.com/pha4ge/hAMRonization
   :documentation: https://github.com/pha4ge/hAMRonization/blob/master/README.md
   
   :license: LGPL / GNU Lesser General Public v3 (LGPLv3)
   :recipe: /`hamronization <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamronization>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamronization/meta.yaml>`_

   


.. conda:package:: hamronization

   |downloads_hamronization| |docker_hamronization|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hamronization

   and update with::

      conda update hamronization

   or use the docker container::

      docker pull quay.io/biocontainers/hamronization:<tag>

   (see `hamronization/tags`_ for valid values for ``<tag>``)


.. |downloads_hamronization| image:: https://img.shields.io/conda/dn/bioconda/hamronization.svg?style=flat
   :target: https://anaconda.org/bioconda/hamronization
   :alt:   (downloads)
.. |docker_hamronization| image:: https://quay.io/repository/biocontainers/hamronization/status
   :target: https://quay.io/repository/biocontainers/hamronization
.. _`hamronization/tags`: https://quay.io/repository/biocontainers/hamronization?tab=tags


.. raw:: html

    <script>
        var package = "hamronization";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hamronization/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hamronization/README.html