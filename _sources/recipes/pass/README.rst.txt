:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pass'
.. highlight: bash

pass
====

.. conda:recipe:: pass
   :replaces_section_title:
   :noindex:

   Proteome Assembler with Short Sequence peptides

   :homepage: https://github.com/bcgsc/PASS
   :license: GPL-3.0-only
   :recipe: /`pass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pass/meta.yaml>`_

   


.. conda:package:: pass

   |downloads_pass| |docker_pass|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends perl: 
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

      mamba install pass

   and update with::

      mamba update pass

  To create a new environment, run::

      mamba create --name myenvname pass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pass:<tag>

   (see `pass/tags`_ for valid values for ``<tag>``)


.. |downloads_pass| image:: https://img.shields.io/conda/dn/bioconda/pass.svg?style=flat
   :target: https://anaconda.org/bioconda/pass
   :alt:   (downloads)
.. |docker_pass| image:: https://quay.io/repository/biocontainers/pass/status
   :target: https://quay.io/repository/biocontainers/pass
.. _`pass/tags`: https://quay.io/repository/biocontainers/pass?tab=tags


.. raw:: html

    <script>
        var package = "pass";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pass/README.html