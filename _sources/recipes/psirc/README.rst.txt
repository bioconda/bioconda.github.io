:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psirc'
.. highlight: bash

psirc
=====

.. conda:recipe:: psirc
   :replaces_section_title:
   :noindex:

   Full\-length linear and circular transcript isoform reconstruction and quantification.

   :homepage: https://github.com/nictru/psirc
   :documentation: https://github.com/nictru/psirc/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`psirc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psirc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psirc/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.275348.121`

   


.. conda:package:: psirc

   |downloads_psirc| |docker_psirc|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
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

      mamba install psirc

   and update with::

      mamba update psirc

  To create a new environment, run::

      mamba create --name myenvname psirc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psirc:<tag>

   (see `psirc/tags`_ for valid values for ``<tag>``)


.. |downloads_psirc| image:: https://img.shields.io/conda/dn/bioconda/psirc.svg?style=flat
   :target: https://anaconda.org/bioconda/psirc
   :alt:   (downloads)
.. |docker_psirc| image:: https://quay.io/repository/biocontainers/psirc/status
   :target: https://quay.io/repository/biocontainers/psirc
.. _`psirc/tags`: https://quay.io/repository/biocontainers/psirc?tab=tags


.. raw:: html

    <script>
        var package = "psirc";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psirc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psirc/README.html