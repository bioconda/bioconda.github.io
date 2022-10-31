:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tb-ml'
.. highlight: bash

tb-ml
=====

.. conda:recipe:: tb-ml
   :replaces_section_title:
   :noindex:

   A simple tool for creating machine learning antimicrobial resistance prediction pipelines using Docker containers for M. tuberculosis.

   :homepage: https://github.com/jodyphelan/tb-ml
   :license: GPL3
   :recipe: /`tb-ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-ml/meta.yaml>`_

   


.. conda:package:: tb-ml

   |downloads_tb-ml| |docker_tb-ml|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tb-ml

   and update with::

      conda update tb-ml

   or use the docker container::

      docker pull quay.io/biocontainers/tb-ml:<tag>

   (see `tb-ml/tags`_ for valid values for ``<tag>``)


.. |downloads_tb-ml| image:: https://img.shields.io/conda/dn/bioconda/tb-ml.svg?style=flat
   :target: https://anaconda.org/bioconda/tb-ml
   :alt:   (downloads)
.. |docker_tb-ml| image:: https://quay.io/repository/biocontainers/tb-ml/status
   :target: https://quay.io/repository/biocontainers/tb-ml
.. _`tb-ml/tags`: https://quay.io/repository/biocontainers/tb-ml?tab=tags


.. raw:: html

    <script>
        var package = "tb-ml";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tb-ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tb-ml/README.html