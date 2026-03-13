:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genewalk'
.. highlight: bash

genewalk
========

.. conda:recipe:: genewalk
   :replaces_section_title:
   :noindex:

   Determine gene function based on network embeddings.

   :homepage: https://github.com/churchmanlab/genewalk
   :documentation: https://genewalk.readthedocs.io/en/latest/
   
   :license: BSD / BSD-2-Clause
   :recipe: /`genewalk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genewalk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genewalk/meta.yaml>`_

   


.. conda:package:: genewalk

   |downloads_genewalk| |docker_genewalk|

   :versions:
      
      

      ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``

      

   
   :depends on gensim: ``>=4.0``
   :depends on goatools: 
   :depends on matplotlib-base: 
   :depends on networkx: ``>=2.1``
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: ``>=4.0.0``
   :depends on python: 
   :depends on scipy: ``<1.13``
   :depends on seaborn-base: 

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

    pixi global install genewalk

to add into an existing workspace instead, run::

    pixi add genewalk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genewalk

Alternatively, to install into a new environment, run::

    conda create -n envname genewalk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genewalk:<tag>

(see `genewalk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genewalk| image:: https://img.shields.io/conda/dn/bioconda/genewalk.svg?style=flat
   :target: https://anaconda.org/bioconda/genewalk
   :alt:   (downloads)
.. |docker_genewalk| image:: https://quay.io/repository/biocontainers/genewalk/status
   :target: https://quay.io/repository/biocontainers/genewalk
.. _`genewalk/tags`: https://quay.io/repository/biocontainers/genewalk?tab=tags


.. raw:: html

    <script>
        var package = "genewalk";
        var versions = ["1.6.3","1.6.2","1.6.1","1.5.3","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genewalk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genewalk/README.html