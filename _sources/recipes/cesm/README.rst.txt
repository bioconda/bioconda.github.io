:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cesm'
.. highlight: bash

cesm
====

.. conda:recipe:: cesm
   :replaces_section_title:
   :noindex:

   The Community Earth System Model \(CESM\) is a coupled climate model for simulating Earth’s climate system

   :homepage: https://github.com/ESCOMP/cesm
   :documentation: http://www.cesm.ucar.edu/
   
   :license: BSD / BSD 3-Clause
   :recipe: /`cesm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cesm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cesm/meta.yaml>`_

   \"CESM \(Community Earth System Model\) is a fully\-coupled\, community\,
   global climate model that provides state\-of\-the\-art computer simulations
   of the Earth\'s past\, present\, and future climate states. 
   When creating a case\, use \`espresso\` for the target machine.
   In addition\, the following environment variables need to be defined
   before creating the cesm case\:
   \`\`\`
   export NETCDF\_DIR\=\$\(nc\-config \-\-prefix\)
   export CIME\_MODEL\=cesm
   export CESM\_DATA\_ROOT\=\$HOME
   export CESM\_WORK\_ROOT\=\$HOME
   mkdir \-p \$CESM\_DATA\_ROOT\/inputdata
   \`\`\`
   \"



.. conda:package:: cesm

   |downloads_cesm| |docker_cesm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.3-6</code>,  <code>2.1.3-5</code>,  <code>2.1.3-4</code>,  <code>2.1.3-3</code>,  <code>2.1.3-2</code>,  <code>2.1.3-1</code>,  <code>2.1.3-0</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  </span></summary>
      

      ``2.1.3-6``,  ``2.1.3-5``,  ``2.1.3-4``,  ``2.1.3-3``,  ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends binutils: 
   :depends cmake: 
   :depends gcc_linux-64: ``9.*``
   :depends gfortran_linux-64: ``9.*``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.4.0``
   :depends libiconv: ``>=1.16,<1.17.0a0``
   :depends libxml2: ``>=2.9.12,<2.10.0a0``
   :depends make: 
   :depends mkl: 
   :depends mpich: ``>=3.4.3,<4.0a0``
   :depends netcdf-fortran: ``* *mpich*``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-xml-libxml: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends subversion: 
   :depends tcsh: 
   :depends wget: 
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

      mamba install cesm

   and update with::

      mamba update cesm

  To create a new environment, run::

      mamba create --name myenvname cesm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cesm:<tag>

   (see `cesm/tags`_ for valid values for ``<tag>``)


.. |downloads_cesm| image:: https://img.shields.io/conda/dn/bioconda/cesm.svg?style=flat
   :target: https://anaconda.org/bioconda/cesm
   :alt:   (downloads)
.. |docker_cesm| image:: https://quay.io/repository/biocontainers/cesm/status
   :target: https://quay.io/repository/biocontainers/cesm
.. _`cesm/tags`: https://quay.io/repository/biocontainers/cesm?tab=tags


.. raw:: html

    <script>
        var package = "cesm";
        var versions = ["2.1.3","2.1.3","2.1.3","2.1.3","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cesm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cesm/README.html