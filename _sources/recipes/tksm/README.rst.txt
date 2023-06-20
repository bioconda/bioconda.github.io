:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tksm'
.. highlight: bash

tksm
====

.. conda:recipe:: tksm
   :replaces_section_title:
   :noindex:

   Very modular\, very cool long\-read transcriptomic simulator

   :homepage: https://github.com/vpc-ccg/tksm
   :license: MIT
   :recipe: /`tksm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tksm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tksm/meta.yaml>`_

   


.. conda:package:: tksm

   |downloads_tksm| |docker_tksm|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends fmt: ``>=10.0.0,<11.0a0``
   :depends joblib: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0 *_cpython``
   :depends python-edlib: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: 
   :depends tqdm: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tksm

   and update with::

      conda update tksm

   or use the docker container::

      docker pull quay.io/biocontainers/tksm:<tag>

   (see `tksm/tags`_ for valid values for ``<tag>``)


.. |downloads_tksm| image:: https://img.shields.io/conda/dn/bioconda/tksm.svg?style=flat
   :target: https://anaconda.org/bioconda/tksm
   :alt:   (downloads)
.. |docker_tksm| image:: https://quay.io/repository/biocontainers/tksm/status
   :target: https://quay.io/repository/biocontainers/tksm
.. _`tksm/tags`: https://quay.io/repository/biocontainers/tksm?tab=tags


.. raw:: html

    <script>
        var package = "tksm";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tksm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tksm/README.html