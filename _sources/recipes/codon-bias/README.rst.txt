:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codon-bias'
.. highlight: bash

codon-bias
==========

.. conda:recipe:: codon-bias
   :replaces_section_title:
   :noindex:

   codon usage bias analysis tools

   :homepage: https://github.com/alondmnt/codon-bias
   :license: MIT / MIT
   :recipe: /`codon-bias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codon-bias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codon-bias/meta.yaml>`_

   


.. conda:package:: codon-bias

   |downloads_codon-bias| |docker_codon-bias|

   :versions:
      
      

      ``0.3.5-0``

      

   
   :depends numpy: 
   :depends pandarallel: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends scipy: 
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

      mamba install codon-bias

   and update with::

      mamba update codon-bias

  To create a new environment, run::

      mamba create --name myenvname codon-bias

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/codon-bias:<tag>

   (see `codon-bias/tags`_ for valid values for ``<tag>``)


.. |downloads_codon-bias| image:: https://img.shields.io/conda/dn/bioconda/codon-bias.svg?style=flat
   :target: https://anaconda.org/bioconda/codon-bias
   :alt:   (downloads)
.. |docker_codon-bias| image:: https://quay.io/repository/biocontainers/codon-bias/status
   :target: https://quay.io/repository/biocontainers/codon-bias
.. _`codon-bias/tags`: https://quay.io/repository/biocontainers/codon-bias?tab=tags


.. raw:: html

    <script>
        var package = "codon-bias";
        var versions = ["0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codon-bias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codon-bias/README.html