:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxator-tk'
.. highlight: bash

taxator-tk
==========

.. conda:recipe:: taxator-tk
   :replaces_section_title:
   :noindex:

   Taxator\-tk sequence taxonomic annotaion

   :homepage: https://github.com/fungs/taxator-tk
   :license: GPLv3
   :recipe: /`taxator-tk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxator-tk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxator-tk/meta.yaml>`_

   


.. conda:package:: taxator-tk

   |downloads_taxator-tk| |docker_taxator-tk|

   :versions:
      
      

      ``1.3.3e-2``,  ``1.3.3e-1``,  ``1.3.3e-0``

      

   
   :depends boost: ``1.64.0 py27_4``
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

      mamba install taxator-tk

   and update with::

      mamba update taxator-tk

  To create a new environment, run::

      mamba create --name myenvname taxator-tk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxator-tk:<tag>

   (see `taxator-tk/tags`_ for valid values for ``<tag>``)


.. |downloads_taxator-tk| image:: https://img.shields.io/conda/dn/bioconda/taxator-tk.svg?style=flat
   :target: https://anaconda.org/bioconda/taxator-tk
   :alt:   (downloads)
.. |docker_taxator-tk| image:: https://quay.io/repository/biocontainers/taxator-tk/status
   :target: https://quay.io/repository/biocontainers/taxator-tk
.. _`taxator-tk/tags`: https://quay.io/repository/biocontainers/taxator-tk?tab=tags


.. raw:: html

    <script>
        var package = "taxator-tk";
        var versions = ["1.3.3e","1.3.3e","1.3.3e"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxator-tk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxator-tk/README.html