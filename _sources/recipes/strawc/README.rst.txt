:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strawc'
.. highlight: bash

strawc
======

.. conda:recipe:: strawc
   :replaces_section_title:
   :noindex:

   Straw bound with pybind11

   :homepage: https://github.com/aidenlab/straw
   :license: MIT / MIT
   :recipe: /`strawc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strawc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strawc/meta.yaml>`_

   


.. conda:package:: strawc

   |downloads_strawc| |docker_strawc|

   :versions:
      
      

      ``0.0.2.1-0``

      

   
   :depends libcurl: ``>=7.77.0,<8.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends pybind11: ``>=2.4``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strawc

   and update with::

      conda update strawc

   or use the docker container::

      docker pull quay.io/biocontainers/strawc:<tag>

   (see `strawc/tags`_ for valid values for ``<tag>``)


.. |downloads_strawc| image:: https://img.shields.io/conda/dn/bioconda/strawc.svg?style=flat
   :target: https://anaconda.org/bioconda/strawc
   :alt:   (downloads)
.. |docker_strawc| image:: https://quay.io/repository/biocontainers/strawc/status
   :target: https://quay.io/repository/biocontainers/strawc
.. _`strawc/tags`: https://quay.io/repository/biocontainers/strawc?tab=tags


.. raw:: html

    <script>
        var package = "strawc";
        var versions = ["0.0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strawc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strawc/README.html