:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'camlhmp'
.. highlight: bash

camlhmp
=======

.. conda:recipe:: camlhmp
   :replaces_section_title:
   :noindex:

   Classification through yAML Heuristic Mapping Protocol

   :homepage: https://github.com/rpetit3/camlhmp
   :license: MIT
   :recipe: /`camlhmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/camlhmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/camlhmp/meta.yaml>`_

   


.. conda:package:: camlhmp

   |downloads_camlhmp| |docker_camlhmp|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends blast: 
   :depends executor: 
   :depends pigz: 
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends rich-click: ``>=1.6.0``
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

      mamba install camlhmp

   and update with::

      mamba update camlhmp

  To create a new environment, run::

      mamba create --name myenvname camlhmp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/camlhmp:<tag>

   (see `camlhmp/tags`_ for valid values for ``<tag>``)


.. |downloads_camlhmp| image:: https://img.shields.io/conda/dn/bioconda/camlhmp.svg?style=flat
   :target: https://anaconda.org/bioconda/camlhmp
   :alt:   (downloads)
.. |docker_camlhmp| image:: https://quay.io/repository/biocontainers/camlhmp/status
   :target: https://quay.io/repository/biocontainers/camlhmp
.. _`camlhmp/tags`: https://quay.io/repository/biocontainers/camlhmp?tab=tags


.. raw:: html

    <script>
        var package = "camlhmp";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/camlhmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/camlhmp/README.html