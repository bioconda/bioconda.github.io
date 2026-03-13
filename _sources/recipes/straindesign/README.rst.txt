:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'straindesign'
.. highlight: bash

straindesign
============

.. conda:recipe:: straindesign
   :replaces_section_title:
   :noindex:

   Library to perform metabolic engineering tasks

   :homepage: https://github.com/brsynth/straindesign
   :license: MIT
   :recipe: /`straindesign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straindesign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straindesign/meta.yaml>`_

   


.. conda:package:: straindesign

   |downloads_straindesign| |docker_straindesign|

   :versions:
      
      

      ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends on biopython: 
   :depends on blessings: 
   :depends on cobra: ``>=0.24``
   :depends on escher: 
   :depends on future: 
   :depends on gnomic: 
   :depends on inspyred: 
   :depends on iprogress: 
   :depends on lazy-object-proxy: 
   :depends on networkx: 
   :depends on numexpr: 
   :depends on openbabel: 
   :depends on openpyxl: 
   :depends on ordered-set: 
   :depends on palettable: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: ``>=3.8``
   :depends on redis-py: 
   :depends on requests: 
   :depends on scipy: 
   :depends on seaborn: 

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

    pixi global install straindesign

to add into an existing workspace instead, run::

    pixi add straindesign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install straindesign

Alternatively, to install into a new environment, run::

    conda create -n envname straindesign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/straindesign:<tag>

(see `straindesign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_straindesign| image:: https://img.shields.io/conda/dn/bioconda/straindesign.svg?style=flat
   :target: https://anaconda.org/bioconda/straindesign
   :alt:   (downloads)
.. |docker_straindesign| image:: https://quay.io/repository/biocontainers/straindesign/status
   :target: https://quay.io/repository/biocontainers/straindesign
.. _`straindesign/tags`: https://quay.io/repository/biocontainers/straindesign?tab=tags


.. raw:: html

    <script>
        var package = "straindesign";
        var versions = ["3.2.3","3.2.2","3.2.0","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/straindesign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/straindesign/README.html