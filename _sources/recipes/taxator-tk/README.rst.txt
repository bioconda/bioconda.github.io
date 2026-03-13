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

      

   
   :depends on boost: ``1.64.0 py27_4``

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

    pixi global install taxator-tk

to add into an existing workspace instead, run::

    pixi add taxator-tk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install taxator-tk

Alternatively, to install into a new environment, run::

    conda create -n envname taxator-tk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/taxator-tk:<tag>

(see `taxator-tk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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