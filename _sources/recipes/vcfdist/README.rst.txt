:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfdist'
.. highlight: bash

vcfdist
=======

.. conda:recipe:: vcfdist
   :replaces_section_title:
   :noindex:

   vcfdist\: benchmarking phased germline variant calls in VCF format

   :homepage: https://github.com/TimD1/vcfdist
   :documentation: https://github.com/TimD1/vcfdist/wiki
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`vcfdist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfdist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfdist/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.8368282`

   


.. conda:package:: vcfdist

   |downloads_vcfdist| |docker_vcfdist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.3-0</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.3-1</code>,  <code>2.5.3-0</code>,  <code>2.5.2-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  </span></summary>
      

      ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install vcfdist

   and update with::

      mamba update vcfdist

  To create a new environment, run::

      mamba create --name myenvname vcfdist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfdist:<tag>

   (see `vcfdist/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfdist| image:: https://img.shields.io/conda/dn/bioconda/vcfdist.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfdist
   :alt:   (downloads)
.. |docker_vcfdist| image:: https://quay.io/repository/biocontainers/vcfdist/status
   :target: https://quay.io/repository/biocontainers/vcfdist
.. _`vcfdist/tags`: https://quay.io/repository/biocontainers/vcfdist?tab=tags


.. raw:: html

    <script>
        var package = "vcfdist";
        var versions = ["2.6.3","2.6.2","2.6.1","2.6.0","2.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfdist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfdist/README.html