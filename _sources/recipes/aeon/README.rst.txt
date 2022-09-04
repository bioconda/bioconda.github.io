:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aeon'
.. highlight: bash

aeon
====

.. conda:recipe:: aeon
   :replaces_section_title:
   :noindex:

   Python\/Rust library for symbolic manipulation of Boolean networks.

   :homepage: https://github.com/sybila/biodivine-aeon-py
   :license: MIT / MIT License
   :recipe: /`aeon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aeon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aeon/meta.yaml>`_

   


.. conda:package:: aeon

   |downloads_aeon| |docker_aeon|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aeon

   and update with::

      conda update aeon

   or use the docker container::

      docker pull quay.io/biocontainers/aeon:<tag>

   (see `aeon/tags`_ for valid values for ``<tag>``)


.. |downloads_aeon| image:: https://img.shields.io/conda/dn/bioconda/aeon.svg?style=flat
   :target: https://anaconda.org/bioconda/aeon
   :alt:   (downloads)
.. |docker_aeon| image:: https://quay.io/repository/biocontainers/aeon/status
   :target: https://quay.io/repository/biocontainers/aeon
.. _`aeon/tags`: https://quay.io/repository/biocontainers/aeon?tab=tags


.. raw:: html

    <script>
        var package = "aeon";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aeon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aeon/README.html