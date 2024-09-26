:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'falco'
.. highlight: bash

falco
=====

.. conda:recipe:: falco
   :replaces_section_title:
   :noindex:

   falco is a drop\-in C\+\+ implementation of FastQC to assess the quality of sequence reads.


   :homepage: https://github.com/smithlabcode/falco
   :documentation: https://falco.readthedocs.io
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`falco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/falco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/falco/meta.yaml>`_

   


.. conda:package:: falco

   |downloads_falco| |docker_falco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-0</code>,  <code>1.2.3-1</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-5</code>,  <code>1.2.1-4</code>,  <code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  </span></summary>
      

      ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-5``,  ``1.2.1-4``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install falco

   and update with::

      mamba update falco

  To create a new environment, run::

      mamba create --name myenvname falco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/falco:<tag>

   (see `falco/tags`_ for valid values for ``<tag>``)


.. |downloads_falco| image:: https://img.shields.io/conda/dn/bioconda/falco.svg?style=flat
   :target: https://anaconda.org/bioconda/falco
   :alt:   (downloads)
.. |docker_falco| image:: https://quay.io/repository/biocontainers/falco/status
   :target: https://quay.io/repository/biocontainers/falco
.. _`falco/tags`: https://quay.io/repository/biocontainers/falco?tab=tags


.. raw:: html

    <script>
        var package = "falco";
        var versions = ["1.2.4","1.2.3","1.2.3","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/falco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/falco/README.html