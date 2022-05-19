:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quickdeconvolution'
.. highlight: bash

quickdeconvolution
==================

.. conda:recipe:: quickdeconvolution
   :replaces_section_title:
   :noindex:

   Deconvolves linked\-reads sequencing data

   :homepage: https://github.com/RolandFaure/QuickDeconvolution
   :license: GPL3
   :recipe: /`quickdeconvolution <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickdeconvolution>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickdeconvolution/meta.yaml>`_

   


.. conda:package:: quickdeconvolution

   |downloads_quickdeconvolution| |docker_quickdeconvolution|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quickdeconvolution

   and update with::

      conda update quickdeconvolution

   or use the docker container::

      docker pull quay.io/biocontainers/quickdeconvolution:<tag>

   (see `quickdeconvolution/tags`_ for valid values for ``<tag>``)


.. |downloads_quickdeconvolution| image:: https://img.shields.io/conda/dn/bioconda/quickdeconvolution.svg?style=flat
   :target: https://anaconda.org/bioconda/quickdeconvolution
   :alt:   (downloads)
.. |docker_quickdeconvolution| image:: https://quay.io/repository/biocontainers/quickdeconvolution/status
   :target: https://quay.io/repository/biocontainers/quickdeconvolution
.. _`quickdeconvolution/tags`: https://quay.io/repository/biocontainers/quickdeconvolution?tab=tags


.. raw:: html

    <script>
        var package = "quickdeconvolution";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quickdeconvolution/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quickdeconvolution/README.html