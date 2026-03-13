:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pastrami'
.. highlight: bash

pastrami
========

.. conda:recipe:: pastrami
   :replaces_section_title:
   :noindex:

   Pastrami is a novel\, scalable computational algorithm for rapid human ancestry estimation.

   :homepage: https://github.com/healthdisparities/pastrami
   :documentation: https://github.com/healthdisparities/pastrami/blob/v1.0.1/README.md
   
   :license: CC BY-NC-SA 4.0
   :recipe: /`pastrami <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastrami>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastrami/meta.yaml>`_

   


.. conda:package:: pastrami

   |downloads_pastrami| |docker_pastrami|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.6-0``,  ``0.9.5-0``

      

   
   :depends on numpy: 
   :depends on pandas: 
   :depends on pathos: 
   :depends on plink2: 
   :depends on python: ``>=3.8``
   :depends on scipy: 

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

    pixi global install pastrami

to add into an existing workspace instead, run::

    pixi add pastrami

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pastrami

Alternatively, to install into a new environment, run::

    conda create -n envname pastrami

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pastrami:<tag>

(see `pastrami/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pastrami| image:: https://img.shields.io/conda/dn/bioconda/pastrami.svg?style=flat
   :target: https://anaconda.org/bioconda/pastrami
   :alt:   (downloads)
.. |docker_pastrami| image:: https://quay.io/repository/biocontainers/pastrami/status
   :target: https://quay.io/repository/biocontainers/pastrami
.. _`pastrami/tags`: https://quay.io/repository/biocontainers/pastrami?tab=tags


.. raw:: html

    <script>
        var package = "pastrami";
        var versions = ["1.0.1","1.0.0","0.9.6","0.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pastrami/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pastrami/README.html