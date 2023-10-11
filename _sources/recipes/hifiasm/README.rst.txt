:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifiasm'
.. highlight: bash

hifiasm
=======

.. conda:recipe:: hifiasm
   :replaces_section_title:
   :noindex:

   Haplotype\-resolved assembler for accurate Hifi reads

   :homepage: https://github.com/chhylp123/hifiasm
   :documentation: https://hifiasm.readthedocs.io/en/latest/index.html
   
   :license: MIT / MIT
   :recipe: /`hifiasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiasm/meta.yaml>`_

   


.. conda:package:: hifiasm

   |downloads_hifiasm| |docker_hifiasm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.19.7-0</code>,  <code>0.19.6-0</code>,  <code>0.19.5-2</code>,  <code>0.19.5-1</code>,  <code>0.19.5-0</code>,  <code>0.19.4-0</code>,  <code>0.19.3-0</code>,  <code>0.19.2-0</code>,  <code>0.19.1-0</code>,  </span></summary>
      

      ``0.19.7-0``,  ``0.19.6-0``,  ``0.19.5-2``,  ``0.19.5-1``,  ``0.19.5-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.9-0``,  ``0.18.8-0``,  ``0.18.7-0``,  ``0.18.5-0``,  ``0.18.4-0``,  ``0.18.2-0``,  ``0.17.3-0``,  ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.5-0``,  ``0.15.4-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.14-1``,  ``0.14-0``,  ``0.13-0``,  ``0.12-0``,  ``0.11-0``,  ``0.10-0``,  ``0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install hifiasm

   and update with::

      mamba update hifiasm

  To create a new environment, run::

      mamba create --name myenvname hifiasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hifiasm:<tag>

   (see `hifiasm/tags`_ for valid values for ``<tag>``)


.. |downloads_hifiasm| image:: https://img.shields.io/conda/dn/bioconda/hifiasm.svg?style=flat
   :target: https://anaconda.org/bioconda/hifiasm
   :alt:   (downloads)
.. |docker_hifiasm| image:: https://quay.io/repository/biocontainers/hifiasm/status
   :target: https://quay.io/repository/biocontainers/hifiasm
.. _`hifiasm/tags`: https://quay.io/repository/biocontainers/hifiasm?tab=tags


.. raw:: html

    <script>
        var package = "hifiasm";
        var versions = ["0.19.7","0.19.6","0.19.5","0.19.5","0.19.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifiasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifiasm/README.html