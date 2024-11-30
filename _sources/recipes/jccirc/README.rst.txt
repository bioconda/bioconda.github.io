:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jccirc'
.. highlight: bash

jccirc
======

.. conda:recipe:: jccirc
   :replaces_section_title:
   :noindex:

   circRNA assembler through integrated junction contigs

   :homepage: https://github.com/cbbzhang/JCcirc
   :documentation: https://github.com/cbbzhang/JCcirc/blob/master/README.md
   
   :license: unknown
   :recipe: /`jccirc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jccirc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jccirc/meta.yaml>`_
   :links: doi: :doi:`10.1093/bib/bbae062`

   


.. conda:package:: jccirc

   |downloads_jccirc| |docker_jccirc|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bwa: 
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

      mamba install jccirc

   and update with::

      mamba update jccirc

  To create a new environment, run::

      mamba create --name myenvname jccirc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jccirc:<tag>

   (see `jccirc/tags`_ for valid values for ``<tag>``)


.. |downloads_jccirc| image:: https://img.shields.io/conda/dn/bioconda/jccirc.svg?style=flat
   :target: https://anaconda.org/bioconda/jccirc
   :alt:   (downloads)
.. |docker_jccirc| image:: https://quay.io/repository/biocontainers/jccirc/status
   :target: https://quay.io/repository/biocontainers/jccirc
.. _`jccirc/tags`: https://quay.io/repository/biocontainers/jccirc?tab=tags


.. raw:: html

    <script>
        var package = "jccirc";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jccirc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jccirc/README.html