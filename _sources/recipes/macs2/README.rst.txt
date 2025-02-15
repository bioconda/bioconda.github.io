:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macs2'
.. highlight: bash

macs2
=====

.. conda:recipe:: macs2
   :replaces_section_title:
   :noindex:

   Model Based Analysis for ChIP\-Seq data

   :homepage: https://pypi.org/project/MACS2/
   :documentation: https://macs3-project.github.io/MACS/
   
   :developer docs: https://github.com/macs3-project/MACS/
   :license: BSD / BSD-3-Clause
   :recipe: /`macs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs2/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`peakcalling_macs`, biotools: :biotools:`macs`, doi: :doi:`10.1186/gb-2008-9-9-r137`

   


.. conda:package:: macs2

   |downloads_macs2| |docker_macs2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.9.1-3</code>,  <code>2.2.9.1-2</code>,  <code>2.2.9.1-1</code>,  <code>2.2.9.1-0</code>,  <code>2.2.7.1-5</code>,  <code>2.2.7.1-4</code>,  <code>2.2.7.1-3</code>,  <code>2.2.7.1-2</code>,  <code>2.2.7.1-1</code>,  </span></summary>
      

      ``2.2.9.1-3``,  ``2.2.9.1-2``,  ``2.2.9.1-1``,  ``2.2.9.1-0``,  ``2.2.7.1-5``,  ``2.2.7.1-4``,  ``2.2.7.1-3``,  ``2.2.7.1-2``,  ``2.2.7.1-1``,  ``2.2.7.1-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.1.4-0``,  ``2.1.3.3-0``,  ``2.1.3.2-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1.20160309-3``,  ``2.1.1.20160309-2``,  ``2.1.1.20160309-1``,  ``2.1.1.20160309-0``,  ``2.1.1-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=2.2.3,<3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: 
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

      mamba install macs2

   and update with::

      mamba update macs2

  To create a new environment, run::

      mamba create --name myenvname macs2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/macs2:<tag>

   (see `macs2/tags`_ for valid values for ``<tag>``)


.. |downloads_macs2| image:: https://img.shields.io/conda/dn/bioconda/macs2.svg?style=flat
   :target: https://anaconda.org/bioconda/macs2
   :alt:   (downloads)
.. |docker_macs2| image:: https://quay.io/repository/biocontainers/macs2/status
   :target: https://quay.io/repository/biocontainers/macs2
.. _`macs2/tags`: https://quay.io/repository/biocontainers/macs2?tab=tags


.. raw:: html

    <script>
        var package = "macs2";
        var versions = ["2.2.9.1","2.2.9.1","2.2.9.1","2.2.9.1","2.2.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macs2/README.html