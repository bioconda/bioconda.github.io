:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genview'
.. highlight: bash

genview
=======

.. conda:recipe:: genview
   :replaces_section_title:
   :noindex:

   Gene\-centric visualization tool for genomic sequences

   :homepage: https://github.com/EbmeyerSt/GEnView.git
   :license: GPLv3.0
   :recipe: /`genview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genview/meta.yaml>`_

   


.. conda:package:: genview

   |downloads_genview| |docker_genview|

   :versions:
      
      

      ``0.2-0``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends on biopython: ``>=1.68``
   :depends on blast: 
   :depends on cd-hit: 
   :depends on diamond: 
   :depends on fasttree: 
   :depends on mafft: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pip: 
   :depends on prodigal: 
   :depends on python: ``>=3.6``
   :depends on sqlite: ``>=3.38.2,<4.0a0``
   :depends on time: 

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

    pixi global install genview

to add into an existing workspace instead, run::

    pixi add genview

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genview

Alternatively, to install into a new environment, run::

    conda create -n envname genview

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genview:<tag>

(see `genview/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genview| image:: https://img.shields.io/conda/dn/bioconda/genview.svg?style=flat
   :target: https://anaconda.org/bioconda/genview
   :alt:   (downloads)
.. |docker_genview| image:: https://quay.io/repository/biocontainers/genview/status
   :target: https://quay.io/repository/biocontainers/genview
.. _`genview/tags`: https://quay.io/repository/biocontainers/genview?tab=tags


.. raw:: html

    <script>
        var package = "genview";
        var versions = ["0.2","0.1.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genview/README.html