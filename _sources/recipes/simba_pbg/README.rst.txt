:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simba_pbg'
.. highlight: bash

simba_pbg
=========

.. conda:recipe:: simba_pbg
   :replaces_section_title:
   :noindex:

   A customized PyTorch\-BigGraph \(PBG\) package for \`simba\`

   :homepage: https://github.com/pinellolab/simba_pbg
   :license: BSD / BSD-3
   :recipe: /`simba_pbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simba_pbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simba_pbg/meta.yaml>`_

   


.. conda:package:: simba_pbg

   |downloads_simba_pbg| |docker_simba_pbg|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simba_pbg

   and update with::

      conda update simba_pbg

   or use the docker container::

      docker pull quay.io/biocontainers/simba_pbg:<tag>

   (see `simba_pbg/tags`_ for valid values for ``<tag>``)


.. |downloads_simba_pbg| image:: https://img.shields.io/conda/dn/bioconda/simba_pbg.svg?style=flat
   :target: https://anaconda.org/bioconda/simba_pbg
   :alt:   (downloads)
.. |docker_simba_pbg| image:: https://quay.io/repository/biocontainers/simba_pbg/status
   :target: https://quay.io/repository/biocontainers/simba_pbg
.. _`simba_pbg/tags`: https://quay.io/repository/biocontainers/simba_pbg?tab=tags


.. raw:: html

    <script>
        var package = "simba_pbg";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simba_pbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simba_pbg/README.html