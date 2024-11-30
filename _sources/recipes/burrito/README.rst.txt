:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'burrito'
.. highlight: bash

burrito
=======

.. conda:recipe:: burrito/0.9.1
   :replaces_section_title:
   :noindex:

   Framework for wrapping and controlling command\-line applications.

   :homepage: https://github.com/biocore/burrito
   :license: BSD License
   :recipe: /`burrito <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito>`_/`0.9.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito/0.9.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito/0.9.1/meta.yaml>`_

   


.. conda:package:: burrito

   |downloads_burrito| |docker_burrito|

   :versions:
      
      

      ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``

      

   
   :depends future: 
   :depends python: 
   :depends r-base: 
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

      mamba install burrito

   and update with::

      mamba update burrito

  To create a new environment, run::

      mamba create --name myenvname burrito

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/burrito:<tag>

   (see `burrito/tags`_ for valid values for ``<tag>``)


.. |downloads_burrito| image:: https://img.shields.io/conda/dn/bioconda/burrito.svg?style=flat
   :target: https://anaconda.org/bioconda/burrito
   :alt:   (downloads)
.. |docker_burrito| image:: https://quay.io/repository/biocontainers/burrito/status
   :target: https://quay.io/repository/biocontainers/burrito
.. _`burrito/tags`: https://quay.io/repository/biocontainers/burrito?tab=tags


.. raw:: html

    <script>
        var package = "burrito";
        var versions = ["0.9.1","0.9.1","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/burrito/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/burrito/README.html