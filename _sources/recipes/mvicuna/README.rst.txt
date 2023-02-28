:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mvicuna'
.. highlight: bash

mvicuna
=======

.. conda:recipe:: mvicuna
   :replaces_section_title:
   :noindex:

   M\-Vicuna is a modularized version of VICUNA\, a de novo assembly program targeting populations with high mutation rates

   :homepage: https://www.broadinstitute.org/scientific-community/science/projects/viral-genomics/vicuna
   :license: https://www.broadinstitute.org/node/4238
   :recipe: /`mvicuna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvicuna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvicuna/meta.yaml>`_

   


.. conda:package:: mvicuna

   |downloads_mvicuna| |docker_mvicuna|

   :versions:
      
      

      ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-1``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mvicuna

   and update with::

      conda update mvicuna

   or use the docker container::

      docker pull quay.io/biocontainers/mvicuna:<tag>

   (see `mvicuna/tags`_ for valid values for ``<tag>``)


.. |downloads_mvicuna| image:: https://img.shields.io/conda/dn/bioconda/mvicuna.svg?style=flat
   :target: https://anaconda.org/bioconda/mvicuna
   :alt:   (downloads)
.. |docker_mvicuna| image:: https://quay.io/repository/biocontainers/mvicuna/status
   :target: https://quay.io/repository/biocontainers/mvicuna
.. _`mvicuna/tags`: https://quay.io/repository/biocontainers/mvicuna?tab=tags


.. raw:: html

    <script>
        var package = "mvicuna";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mvicuna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mvicuna/README.html