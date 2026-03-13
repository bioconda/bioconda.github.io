:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proksee'
.. highlight: bash

proksee
=======

.. conda:recipe:: proksee
   :replaces_section_title:
   :noindex:

   Proksee is a suite of command line tools for performing assembly\, annotation and visualization of microbial genomes.

   :homepage: https://github.com/proksee-project/proksee-cmd
   :license: Apache License, Version 2.0
   :recipe: /`proksee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proksee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proksee/meta.yaml>`_

   


.. conda:package:: proksee

   |downloads_proksee| |docker_proksee|

   :versions:
      
      

      ``1.0.0a6-0``,  ``1.0.0a5-0``,  ``1.0.0a4-0``,  ``1.0.0a3-0``,  ``1.0.0a2-0``,  ``1.0.0a1-0``

      

   
   :depends on click: 
   :depends on fastp: ``0.22.0.*``
   :depends on joblib: ``1.0.1.*``
   :depends on mash: 
   :depends on numpy: ``1.19.5.*``
   :depends on python: ``3.7.*``
   :depends on quast: ``5.0.2.*``
   :depends on scikit-learn: ``0.24.1.*``
   :depends on scipy: 
   :depends on skesa: 
   :depends on spades: 
   :depends on wget: 

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

    pixi global install proksee

to add into an existing workspace instead, run::

    pixi add proksee

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proksee

Alternatively, to install into a new environment, run::

    conda create -n envname proksee

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proksee:<tag>

(see `proksee/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proksee| image:: https://img.shields.io/conda/dn/bioconda/proksee.svg?style=flat
   :target: https://anaconda.org/bioconda/proksee
   :alt:   (downloads)
.. |docker_proksee| image:: https://quay.io/repository/biocontainers/proksee/status
   :target: https://quay.io/repository/biocontainers/proksee
.. _`proksee/tags`: https://quay.io/repository/biocontainers/proksee?tab=tags


.. raw:: html

    <script>
        var package = "proksee";
        var versions = ["1.0.0a6","1.0.0a5","1.0.0a4","1.0.0a3","1.0.0a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proksee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proksee/README.html