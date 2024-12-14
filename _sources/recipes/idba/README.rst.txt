:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idba'
.. highlight: bash

idba
====

.. conda:recipe:: idba
   :replaces_section_title:
   :noindex:

   IDBA is a practical iterative De Bruijn Graph De Novo Assembler for sequence assembly in bioinformatics.

   :homepage: http://i.cs.hku.hk/~alse/hkubrg/projects/idba_ud/
   :license: GPL2
   :recipe: /`idba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba/meta.yaml>`_
   :links: biotools: :biotools:`idba`, doi: :doi:`10.1007/978-3-642-12683-3_28`

   


.. conda:package:: idba

   |downloads_idba| |docker_idba|

   :versions:
      
      

      ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.1-2``,  ``1.1.1-1``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python_abi: ``3.11.* *_cp311``
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

      mamba install idba

   and update with::

      mamba update idba

  To create a new environment, run::

      mamba create --name myenvname idba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/idba:<tag>

   (see `idba/tags`_ for valid values for ``<tag>``)


.. |downloads_idba| image:: https://img.shields.io/conda/dn/bioconda/idba.svg?style=flat
   :target: https://anaconda.org/bioconda/idba
   :alt:   (downloads)
.. |docker_idba| image:: https://quay.io/repository/biocontainers/idba/status
   :target: https://quay.io/repository/biocontainers/idba
.. _`idba/tags`: https://quay.io/repository/biocontainers/idba?tab=tags


.. raw:: html

    <script>
        var package = "idba";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.3","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idba/README.html