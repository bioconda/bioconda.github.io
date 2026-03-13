:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sccaller'
.. highlight: bash

sccaller
========

.. conda:recipe:: sccaller
   :replaces_section_title:
   :noindex:

   Dong X et al. Accurate identification of single\-nucleotide variants in whole\-genome\-amplified single cells. Nat Methods. 2017 May\;14\(5\)\:491\-493. doi\: 10.1038\/nmeth.4227

   :homepage: https://github.com/biosinodx/SCcaller
   :license: GPL-3
   :recipe: /`sccaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaller/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.4227`

   


.. conda:package:: sccaller

   |downloads_sccaller| |docker_sccaller|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.21-0``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends on numpy: 
   :depends on pysam: ``>=0.15.1``
   :depends on python: ``<3``
   :depends on samtools: ``>=1.9``

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

    pixi global install sccaller

to add into an existing workspace instead, run::

    pixi add sccaller

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sccaller

Alternatively, to install into a new environment, run::

    conda create -n envname sccaller

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sccaller:<tag>

(see `sccaller/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sccaller| image:: https://img.shields.io/conda/dn/bioconda/sccaller.svg?style=flat
   :target: https://anaconda.org/bioconda/sccaller
   :alt:   (downloads)
.. |docker_sccaller| image:: https://quay.io/repository/biocontainers/sccaller/status
   :target: https://quay.io/repository/biocontainers/sccaller
.. _`sccaller/tags`: https://quay.io/repository/biocontainers/sccaller?tab=tags


.. raw:: html

    <script>
        var package = "sccaller";
        var versions = ["2.0.0","2.0.0","1.21","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sccaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sccaller/README.html