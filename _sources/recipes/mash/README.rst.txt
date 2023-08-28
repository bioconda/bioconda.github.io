:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mash'
.. highlight: bash

mash
====

.. conda:recipe:: mash
   :replaces_section_title:
   :noindex:

   Fast sequence distance estimator that uses MinHash

   :homepage: https://github.com/marbl/Mash
   :license: https://github.com/marbl/Mash/blob/master/LICENSE.txt
   :recipe: /`mash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mash/meta.yaml>`_

   


.. conda:package:: mash

   |downloads_mash| |docker_mash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-6</code>,  <code>2.3-5</code>,  <code>2.3-4</code>,  <code>2.3-3</code>,  <code>2.3-2</code>,  <code>2.3-1</code>,  <code>2.3-0</code>,  <code>2.2.2-2</code>,  <code>2.2.2-1</code>,  </span></summary>
      

      ``2.3-6``,  ``2.3-5``,  ``2.3-4``,  ``2.3-3``,  ``2.3-2``,  ``2.3-1``,  ``2.3-0``,  ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1.1-0``,  ``2.1-1``,  ``2.1-0``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``1.1-0``,  ``1.0.2-2``,  ``1.0.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends capnproto: ``>=0.10.2,<0.10.3.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mash

   and update with::

      mamba update mash

  To create a new environment, run::

      mamba create --name myenvname mash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mash:<tag>

   (see `mash/tags`_ for valid values for ``<tag>``)


.. |downloads_mash| image:: https://img.shields.io/conda/dn/bioconda/mash.svg?style=flat
   :target: https://anaconda.org/bioconda/mash
   :alt:   (downloads)
.. |docker_mash| image:: https://quay.io/repository/biocontainers/mash/status
   :target: https://quay.io/repository/biocontainers/mash
.. _`mash/tags`: https://quay.io/repository/biocontainers/mash?tab=tags


.. raw:: html

    <script>
        var package = "mash";
        var versions = ["2.3","2.3","2.3","2.3","2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mash/README.html