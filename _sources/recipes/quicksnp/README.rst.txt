:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quicksnp'
.. highlight: bash

quicksnp
========

.. conda:recipe:: quicksnp/1.0.1
   :replaces_section_title:
   :noindex:

   A python script to quickly build a Neighbor Joining tree using only a SNP distance matrix.

   :homepage: https://github.com/k-florek/QuickSNP
   :license: GPL / GPL-3
   :recipe: /`quicksnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksnp>`_/`1.0.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksnp/1.0.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksnp/1.0.1/meta.yaml>`_

   


.. conda:package:: quicksnp

   |downloads_quicksnp| |docker_quicksnp|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends numpy: ``>=1.22.4``
   :depends pandas: ``>=1.4.3``
   :depends python: ``>=3``
   :depends scikit-bio: ``0.5.7``
   :depends scipy: ``1.8.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install quicksnp

   and update with::

      mamba update quicksnp

  To create a new environment, run::

      mamba create --name myenvname quicksnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quicksnp:<tag>

   (see `quicksnp/tags`_ for valid values for ``<tag>``)


.. |downloads_quicksnp| image:: https://img.shields.io/conda/dn/bioconda/quicksnp.svg?style=flat
   :target: https://anaconda.org/bioconda/quicksnp
   :alt:   (downloads)
.. |docker_quicksnp| image:: https://quay.io/repository/biocontainers/quicksnp/status
   :target: https://quay.io/repository/biocontainers/quicksnp
.. _`quicksnp/tags`: https://quay.io/repository/biocontainers/quicksnp?tab=tags


.. raw:: html

    <script>
        var package = "quicksnp";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quicksnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quicksnp/README.html