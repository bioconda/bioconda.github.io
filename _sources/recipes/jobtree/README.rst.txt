:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jobtree'
.. highlight: bash

jobtree
=======

.. conda:recipe:: jobtree
   :replaces_section_title:
   :noindex:

   Python based pipeline management software for clusters that makes running recursive and dynamically scheduled computations straightforward

   :homepage: https://github.com/benedictpaten/jobTree
   :license: MIT
   :recipe: /`jobtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jobtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jobtree/meta.yaml>`_

   


.. conda:package:: jobtree

   |downloads_jobtree| |docker_jobtree|

   :versions:
      
      

      ``09.04.2017-2``,  ``3.0.3-1``

      

   
   :depends python: ``2.7.*``
   :depends sonlib: 
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

      mamba install jobtree

   and update with::

      mamba update jobtree

  To create a new environment, run::

      mamba create --name myenvname jobtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jobtree:<tag>

   (see `jobtree/tags`_ for valid values for ``<tag>``)


.. |downloads_jobtree| image:: https://img.shields.io/conda/dn/bioconda/jobtree.svg?style=flat
   :target: https://anaconda.org/bioconda/jobtree
   :alt:   (downloads)
.. |docker_jobtree| image:: https://quay.io/repository/biocontainers/jobtree/status
   :target: https://quay.io/repository/biocontainers/jobtree
.. _`jobtree/tags`: https://quay.io/repository/biocontainers/jobtree?tab=tags


.. raw:: html

    <script>
        var package = "jobtree";
        var versions = ["09.04.2017","3.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jobtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jobtree/README.html