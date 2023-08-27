:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms-entropy'
.. highlight: bash

ms-entropy
==========

.. conda:recipe:: ms-entropy
   :replaces_section_title:
   :noindex:

   This package provides a Python implementation of calculating spectral entropy\, entropy similarity\, and Flash entropy search for mass spectrometry data.

   :homepage: https://github.com/YuanyueLi/MSEntropy
   :license: Apache-2.0
   :recipe: /`ms-entropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms-entropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms-entropy/meta.yaml>`_

   


.. conda:package:: ms-entropy

   |downloads_ms-entropy| |docker_ms-entropy|

   :versions:
      
      

      ``0.9.11-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.25.2,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ms-entropy

   and update with::

      conda update ms-entropy

   or use the docker container::

      docker pull quay.io/biocontainers/ms-entropy:<tag>

   (see `ms-entropy/tags`_ for valid values for ``<tag>``)


.. |downloads_ms-entropy| image:: https://img.shields.io/conda/dn/bioconda/ms-entropy.svg?style=flat
   :target: https://anaconda.org/bioconda/ms-entropy
   :alt:   (downloads)
.. |docker_ms-entropy| image:: https://quay.io/repository/biocontainers/ms-entropy/status
   :target: https://quay.io/repository/biocontainers/ms-entropy
.. _`ms-entropy/tags`: https://quay.io/repository/biocontainers/ms-entropy?tab=tags


.. raw:: html

    <script>
        var package = "ms-entropy";
        var versions = ["0.9.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms-entropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms-entropy/README.html