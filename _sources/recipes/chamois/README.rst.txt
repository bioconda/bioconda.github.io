:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chamois'
.. highlight: bash

chamois
=======

.. conda:recipe:: chamois
   :replaces_section_title:
   :noindex:

   Chemical Hierarchy Approximation for secondary Metabolism clusters Obtained In Silico.

   :homepage: https://chamois.readthedocs.io/
   :developer docs: https://github.com/zellerlab/CHAMOIS
   :license: GPL / GPL-3.0-or-later
   :recipe: /`chamois <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chamois>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chamois/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.03.13.642868`

   


.. conda:package:: chamois

   |downloads_chamois| |docker_chamois|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends on anndata: ``>=0.8,<0.10``
   :depends on gb-io: ``>=0.3.1,<0.4``
   :depends on importlib_resources: ``>=1.0``
   :depends on kennard-stone: ``>=2.1,<3.0``
   :depends on numpy: ``>=1.0,<3.0``
   :depends on numpy: ``>=1.16,<3.0``
   :depends on pandas: ``>=1.3,<3.0``
   :depends on platformdirs: ``>=3.0,<5.0``
   :depends on pyhmmer: ``>=0.12.0,<0.13.0``
   :depends on pyrodigal: ``>=3.0,<4.0``
   :depends on python: ``>=3.7``
   :depends on rdkit: ``>=2023.3``
   :depends on rich: ``>=12.4.0``
   :depends on rich-argparse: ``>=1.1,<2.0``
   :depends on scikit-learn: ``>=1.0,<2.0``
   :depends on scipy: ``>=1.4,<2.0``
   :depends on zstandard: ``>=0.25,<1.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install chamois

to add into an existing workspace instead, run::

    pixi add chamois

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chamois

Alternatively, to install into a new environment, run::

    conda create -n envname chamois

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chamois:<tag>

(see `chamois/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chamois| image:: https://img.shields.io/conda/dn/bioconda/chamois.svg?style=flat
   :target: https://anaconda.org/bioconda/chamois
   :alt:   (downloads)
.. |docker_chamois| image:: https://quay.io/repository/biocontainers/chamois/status
   :target: https://quay.io/repository/biocontainers/chamois
.. _`chamois/tags`: https://quay.io/repository/biocontainers/chamois?tab=tags


.. raw:: html

    <script>
        var package = "chamois";
        var versions = ["0.2.2","0.2.1","0.2.0","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chamois/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chamois/README.html