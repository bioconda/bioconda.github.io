:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marvd2'
.. highlight: bash

marvd2
======

.. conda:recipe:: marvd2
   :replaces_section_title:
   :noindex:

   Metagenomic Archaeal Virus Detector 2

   :homepage: https://bitbucket.org/MAVERICLab/marvd2
   :documentation: https://bitbucket.org/MAVERICLab/marvd2/src/master/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`marvd2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marvd2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marvd2/meta.yaml>`_

   


.. conda:package:: marvd2

   |downloads_marvd2| |docker_marvd2|

   :versions:
      
      

      ``0.11.9-0``,  ``0.11.8-0``,  ``0.11.3-0``,  ``0.11.2-0``

      

   
   :depends biopython: ``1.80``
   :depends ete3: ``>=3.1.2``
   :depends hmmer: ``>=3.3.2``
   :depends joblib: ``>=1.2.0``
   :depends matplotlib-base: ``>=3.4.3``
   :depends mmseqs2: ``>=13.45111``
   :depends numpy: ``>=1.23.5,<2.0a0``
   :depends pandas: ``>=1.5.2``
   :depends prodigal: ``2.6.3``
   :depends psutil: ``>=5.9.4``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends scikit-learn: ``>=1.1.2``
   :depends scipy: ``>=1.10.0``
   :depends swifter: ``>=1.3.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install marvd2

   and update with::

      conda update marvd2

   or use the docker container::

      docker pull quay.io/biocontainers/marvd2:<tag>

   (see `marvd2/tags`_ for valid values for ``<tag>``)


.. |downloads_marvd2| image:: https://img.shields.io/conda/dn/bioconda/marvd2.svg?style=flat
   :target: https://anaconda.org/bioconda/marvd2
   :alt:   (downloads)
.. |docker_marvd2| image:: https://quay.io/repository/biocontainers/marvd2/status
   :target: https://quay.io/repository/biocontainers/marvd2
.. _`marvd2/tags`: https://quay.io/repository/biocontainers/marvd2?tab=tags


.. raw:: html

    <script>
        var package = "marvd2";
        var versions = ["0.11.9","0.11.8","0.11.3","0.11.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marvd2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marvd2/README.html