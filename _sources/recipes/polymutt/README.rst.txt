:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polymutt'
.. highlight: bash

polymutt
========

.. conda:recipe:: polymutt
   :replaces_section_title:
   :noindex:

   Li B\, Chen W\, Zhan X\, Busonero F\, Sanna S\, et al. \(2012\) A Likelihood\-Based Framework for Variant Calling and De Novo Mutation Detection in Families. PLoS Genet 8\(10\)\: e1002944. doi\:10.1371\/journal.pgen.1002944

   :homepage: https://genome.sph.umich.edu/wiki/Polymutt
   :license: custom (written permission by author to publish on bioconda)
   :recipe: /`polymutt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polymutt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polymutt/meta.yaml>`_

   


.. conda:package:: polymutt

   |downloads_polymutt| |docker_polymutt|

   :versions:
      
      

      ``0.18-0``

      

   
   :depends bzip2: ``1.0*``
   :depends libgcc: 
   :depends openmp: 
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

      mamba install polymutt

   and update with::

      mamba update polymutt

  To create a new environment, run::

      mamba create --name myenvname polymutt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/polymutt:<tag>

   (see `polymutt/tags`_ for valid values for ``<tag>``)


.. |downloads_polymutt| image:: https://img.shields.io/conda/dn/bioconda/polymutt.svg?style=flat
   :target: https://anaconda.org/bioconda/polymutt
   :alt:   (downloads)
.. |docker_polymutt| image:: https://quay.io/repository/biocontainers/polymutt/status
   :target: https://quay.io/repository/biocontainers/polymutt
.. _`polymutt/tags`: https://quay.io/repository/biocontainers/polymutt?tab=tags


.. raw:: html

    <script>
        var package = "polymutt";
        var versions = ["0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polymutt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polymutt/README.html