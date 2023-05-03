:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kitsune'
.. highlight: bash

kitsune
=======

.. conda:recipe:: kitsune
   :replaces_section_title:
   :noindex:

   kitsune

   :homepage: https://github.com/natapol/kitsune
   :license: GPL / GPL-3.0-only
   :recipe: /`kitsune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kitsune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kitsune/meta.yaml>`_

   K\-mer\-length Iterative Selection for UNbiased Ecophylogenomics



.. conda:package:: kitsune

   |downloads_kitsune| |docker_kitsune|

   :versions:
      
      

      ``1.3.3-0``

      

   
   :depends kmer-jellyfish: ``>=2.2``
   :depends numpy: ``>=1.22.3``
   :depends python: ``>=3.5``
   :depends scipy: ``>=1.7.3``
   :depends tqdm: ``>=4.38.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kitsune

   and update with::

      conda update kitsune

   or use the docker container::

      docker pull quay.io/biocontainers/kitsune:<tag>

   (see `kitsune/tags`_ for valid values for ``<tag>``)


.. |downloads_kitsune| image:: https://img.shields.io/conda/dn/bioconda/kitsune.svg?style=flat
   :target: https://anaconda.org/bioconda/kitsune
   :alt:   (downloads)
.. |docker_kitsune| image:: https://quay.io/repository/biocontainers/kitsune/status
   :target: https://quay.io/repository/biocontainers/kitsune
.. _`kitsune/tags`: https://quay.io/repository/biocontainers/kitsune?tab=tags


.. raw:: html

    <script>
        var package = "kitsune";
        var versions = ["1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kitsune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kitsune/README.html