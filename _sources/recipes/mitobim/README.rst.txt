:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitobim'
.. highlight: bash

mitobim
=======

.. conda:recipe:: mitobim
   :replaces_section_title:
   :noindex:

   mitochondrial baiting and iterative mapping

   :homepage: https://github.com/chrishah/MITObim
   :license: MIT
   :recipe: /`mitobim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitobim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitobim/meta.yaml>`_

   


.. conda:package:: mitobim

   |downloads_mitobim| |docker_mitobim|

   :versions:
      
      

      ``1.9.1-1``,  ``1.9.1-0``

      

   
   :depends mira: ``4.0.2.*``
   :depends parallel: 
   :depends perl: 
   :depends python: ``<3``
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

      mamba install mitobim

   and update with::

      mamba update mitobim

  To create a new environment, run::

      mamba create --name myenvname mitobim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mitobim:<tag>

   (see `mitobim/tags`_ for valid values for ``<tag>``)


.. |downloads_mitobim| image:: https://img.shields.io/conda/dn/bioconda/mitobim.svg?style=flat
   :target: https://anaconda.org/bioconda/mitobim
   :alt:   (downloads)
.. |docker_mitobim| image:: https://quay.io/repository/biocontainers/mitobim/status
   :target: https://quay.io/repository/biocontainers/mitobim
.. _`mitobim/tags`: https://quay.io/repository/biocontainers/mitobim?tab=tags


.. raw:: html

    <script>
        var package = "mitobim";
        var versions = ["1.9.1","1.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitobim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitobim/README.html