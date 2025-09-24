:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vmatch'
.. highlight: bash

vmatch
======

.. conda:recipe:: vmatch
   :replaces_section_title:
   :noindex:

   The Vmatch large scale sequence analysis software.

   :homepage: http://www.vmatch.de
   :license: OTHER / Unknown
   :recipe: /`vmatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vmatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vmatch/meta.yaml>`_
   :links: biotools: :biotools:`vmatch`

   


.. conda:package:: vmatch

   |downloads_vmatch| |docker_vmatch|

   :versions:
      
      

      ``2.3.1-0``,  ``2.3.0-6``,  ``2.3.0-5``,  ``2.3.0-4``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.10,<6``
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

      mamba install vmatch

   and update with::

      mamba update vmatch

  To create a new environment, run::

      mamba create --name myenvname vmatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vmatch:<tag>

   (see `vmatch/tags`_ for valid values for ``<tag>``)


.. |downloads_vmatch| image:: https://img.shields.io/conda/dn/bioconda/vmatch.svg?style=flat
   :target: https://anaconda.org/bioconda/vmatch
   :alt:   (downloads)
.. |docker_vmatch| image:: https://quay.io/repository/biocontainers/vmatch/status
   :target: https://quay.io/repository/biocontainers/vmatch
.. _`vmatch/tags`: https://quay.io/repository/biocontainers/vmatch?tab=tags


.. raw:: html

    <script>
        var package = "vmatch";
        var versions = ["2.3.1","2.3.0","2.3.0","2.3.0","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vmatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vmatch/README.html