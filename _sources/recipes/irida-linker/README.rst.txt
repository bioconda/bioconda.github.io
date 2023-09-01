:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-linker'
.. highlight: bash

irida-linker
============

.. conda:recipe:: irida-linker
   :replaces_section_title:
   :noindex:

   The NGS Archive Linker is a Perl script used to generate a structure of links for files stored in the IRIDA platform.

   :homepage: https://github.com/phac-nml/irida-linker
   :license: Apache / Apache-2.0
   :recipe: /`irida-linker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-linker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-linker/meta.yaml>`_

   


.. conda:package:: irida-linker

   |downloads_irida-linker| |docker_irida-linker|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends perl: ``>=5.22``
   :depends perl-config-simple: 
   :depends perl-file-path: 
   :depends perl-getopt-long: 
   :depends perl-http-message: 
   :depends perl-json: 
   :depends perl-libwww-perl: 
   :depends perl-lwp-protocol-https: 
   :depends perl-lwp-simple: 
   :depends perl-termreadkey: 
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

      mamba install irida-linker

   and update with::

      mamba update irida-linker

  To create a new environment, run::

      mamba create --name myenvname irida-linker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/irida-linker:<tag>

   (see `irida-linker/tags`_ for valid values for ``<tag>``)


.. |downloads_irida-linker| image:: https://img.shields.io/conda/dn/bioconda/irida-linker.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-linker
   :alt:   (downloads)
.. |docker_irida-linker| image:: https://quay.io/repository/biocontainers/irida-linker/status
   :target: https://quay.io/repository/biocontainers/irida-linker
.. _`irida-linker/tags`: https://quay.io/repository/biocontainers/irida-linker?tab=tags


.. raw:: html

    <script>
        var package = "irida-linker";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-linker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-linker/README.html