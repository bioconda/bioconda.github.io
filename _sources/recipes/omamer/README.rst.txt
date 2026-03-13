:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'omamer'
.. highlight: bash

omamer
======

.. conda:recipe:: omamer
   :replaces_section_title:
   :noindex:

   OMAmer \- tree\-driven and alignment\-free protein assignment to sub\-families

   :homepage: https://github.com/DessimozLab/omamer
   :license: LGPL-3.0
   :recipe: /`omamer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omamer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omamer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab219`

   


.. conda:package:: omamer

   |downloads_omamer| |docker_omamer|

   :versions:
      
      

      ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``

      

   
   :depends on alive-progress: 
   :depends on biopython: 
   :depends on ete3: 
   :depends on libsqlite: ``<=3.40.0``
   :depends on numba: 
   :depends on numpy: ``<2``
   :depends on pandas: ``>2.0.0``
   :depends on property-manager: 
   :depends on pysais: 
   :depends on pytables: 
   :depends on python: ``>=3.8``
   :depends on rmath4: 
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install omamer

to add into an existing workspace instead, run::

    pixi add omamer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install omamer

Alternatively, to install into a new environment, run::

    conda create -n envname omamer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/omamer:<tag>

(see `omamer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_omamer| image:: https://img.shields.io/conda/dn/bioconda/omamer.svg?style=flat
   :target: https://anaconda.org/bioconda/omamer
   :alt:   (downloads)
.. |docker_omamer| image:: https://quay.io/repository/biocontainers/omamer/status
   :target: https://quay.io/repository/biocontainers/omamer
.. _`omamer/tags`: https://quay.io/repository/biocontainers/omamer?tab=tags


.. raw:: html

    <script>
        var package = "omamer";
        var versions = ["2.1.2","2.1.1","2.1.0","2.1.0","2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/omamer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/omamer/README.html