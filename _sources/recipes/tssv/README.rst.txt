:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tssv'
.. highlight: bash

tssv
====

.. conda:recipe:: tssv
   :replaces_section_title:
   :noindex:

   Targeted characterisation of short structural variation.

   :homepage: https://github.com/jfjlaros/tssv
   :documentation: https://tssv.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`tssv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tssv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tssv/meta.yaml>`_

   


.. conda:package:: tssv

   |downloads_tssv| |docker_tssv|

   :versions:
      
      

      ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.0-0``

      

   
   :depends biopython: ``>=1.72``
   :depends libgcc: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
   :depends setuptools: 
   :depends xopen: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tssv

   and update with::

      mamba update tssv

  To create a new environment, run::

      mamba create --name myenvname tssv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tssv:<tag>

   (see `tssv/tags`_ for valid values for ``<tag>``)


.. |downloads_tssv| image:: https://img.shields.io/conda/dn/bioconda/tssv.svg?style=flat
   :target: https://anaconda.org/bioconda/tssv
   :alt:   (downloads)
.. |docker_tssv| image:: https://quay.io/repository/biocontainers/tssv/status
   :target: https://quay.io/repository/biocontainers/tssv
.. _`tssv/tags`: https://quay.io/repository/biocontainers/tssv?tab=tags


.. raw:: html

    <script>
        var package = "tssv";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tssv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tssv/README.html