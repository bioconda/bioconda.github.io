:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hap-ibd'
.. highlight: bash

hap-ibd
=======

.. conda:recipe:: hap-ibd
   :replaces_section_title:
   :noindex:

   Hap\-ibd Detects identity\-by\-descent \(IBD\) segments and homozygosity\-by\-descent \(HBD\) segments in phased genotype data.

   :homepage: https://github.com/browning-lab/hap-ibd
   :documentation: https://github.com/browning-lab/hap-ibd/blob/master/README.md
   
   :license: Apache-2.0
   :recipe: /`hap-ibd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap-ibd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap-ibd/meta.yaml>`_
   :links: biotools: :biotools:`hap-ibd`, doi: :doi:`10.1016/j.ajhg.2020.02.010`

   


.. conda:package:: hap-ibd

   |downloads_hap-ibd| |docker_hap-ibd|

   :versions:
      
      

      ``1.0.rev20May22.818-0``

      

   
   :depends on openjdk: ``>=8``
   :depends on python: 

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

    pixi global install hap-ibd

to add into an existing workspace instead, run::

    pixi add hap-ibd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hap-ibd

Alternatively, to install into a new environment, run::

    conda create -n envname hap-ibd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hap-ibd:<tag>

(see `hap-ibd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hap-ibd| image:: https://img.shields.io/conda/dn/bioconda/hap-ibd.svg?style=flat
   :target: https://anaconda.org/bioconda/hap-ibd
   :alt:   (downloads)
.. |docker_hap-ibd| image:: https://quay.io/repository/biocontainers/hap-ibd/status
   :target: https://quay.io/repository/biocontainers/hap-ibd
.. _`hap-ibd/tags`: https://quay.io/repository/biocontainers/hap-ibd?tab=tags


.. raw:: html

    <script>
        var package = "hap-ibd";
        var versions = ["1.0.rev20May22.818"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hap-ibd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hap-ibd/README.html