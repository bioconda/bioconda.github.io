:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novobreak'
.. highlight: bash

novobreak
=========

.. conda:recipe:: novobreak
   :replaces_section_title:
   :noindex:

   local assembly for breakpoint detection in cancer genomes

   :homepage: https://github.com/czc/nb_distribution
   :license: MIT
   :recipe: /`novobreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novobreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novobreak/meta.yaml>`_

   


.. conda:package:: novobreak

   |downloads_novobreak| |docker_novobreak|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3rc-9</code>,  <code>1.1.3rc-8</code>,  <code>1.1.3rc-7</code>,  <code>1.1.3rc-6</code>,  <code>1.1.3rc-5</code>,  <code>1.1.3rc-4</code>,  <code>1.1.3rc-3</code>,  <code>1.1.3rc-2</code>,  <code>1.1.3rc-1</code>,  </span></summary>
      

      ``1.1.3rc-9``,  ``1.1.3rc-8``,  ``1.1.3rc-7``,  ``1.1.3rc-6``,  ``1.1.3rc-5``,  ``1.1.3rc-4``,  ``1.1.3rc-3``,  ``1.1.3rc-2``,  ``1.1.3rc-1``,  ``1.1.3rc-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: ``>=0.7.10``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends samtools: ``1.*``
   :depends ssake: 
   :depends zlib: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install novobreak

   and update with::

      mamba update novobreak

  To create a new environment, run::

      mamba create --name myenvname novobreak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/novobreak:<tag>

   (see `novobreak/tags`_ for valid values for ``<tag>``)


.. |downloads_novobreak| image:: https://img.shields.io/conda/dn/bioconda/novobreak.svg?style=flat
   :target: https://anaconda.org/bioconda/novobreak
   :alt:   (downloads)
.. |docker_novobreak| image:: https://quay.io/repository/biocontainers/novobreak/status
   :target: https://quay.io/repository/biocontainers/novobreak
.. _`novobreak/tags`: https://quay.io/repository/biocontainers/novobreak?tab=tags


.. raw:: html

    <script>
        var package = "novobreak";
        var versions = ["1.1.3rc","1.1.3rc","1.1.3rc","1.1.3rc","1.1.3rc"];
    </script>





Notes
-----
This package makes novobreak available via a wrapper in PATH\, called \`run\_novobreak\`\, which 
takes all arguments of the run\_novoBreak.sh script except the first\, which is automatically
inferred.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novobreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novobreak/README.html