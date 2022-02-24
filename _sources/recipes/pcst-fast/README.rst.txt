:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcst-fast'
.. highlight: bash

pcst-fast
=========

.. conda:recipe:: pcst-fast
   :replaces_section_title:
   :noindex:

   Implementation for PCST

   :homepage: https://github.com/fraenkel-lab/pcst_fast
   :license: MIT / MIT
   :recipe: /`pcst-fast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcst-fast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcst-fast/meta.yaml>`_

   


.. conda:package:: pcst-fast

   |downloads_pcst-fast| |docker_pcst-fast|

   :versions:
      
      

      ``1.0.7.1-1``,  ``1.0.7.1-0``,  ``1.0.7-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends pybind11: ``>=2.4``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pcst-fast

   and update with::

      conda update pcst-fast

   or use the docker container::

      docker pull quay.io/biocontainers/pcst-fast:<tag>

   (see `pcst-fast/tags`_ for valid values for ``<tag>``)


.. |downloads_pcst-fast| image:: https://img.shields.io/conda/dn/bioconda/pcst-fast.svg?style=flat
   :target: https://anaconda.org/bioconda/pcst-fast
   :alt:   (downloads)
.. |docker_pcst-fast| image:: https://quay.io/repository/biocontainers/pcst-fast/status
   :target: https://quay.io/repository/biocontainers/pcst-fast
.. _`pcst-fast/tags`: https://quay.io/repository/biocontainers/pcst-fast?tab=tags


.. raw:: html

    <script>
        var package = "pcst-fast";
        var versions = ["1.0.7.1","1.0.7.1","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcst-fast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcst-fast/README.html