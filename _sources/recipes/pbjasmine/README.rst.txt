:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbjasmine'
.. highlight: bash

pbjasmine
=========

.. conda:recipe:: pbjasmine
   :replaces_section_title:
   :noindex:

   jasmine

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbjasmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbjasmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbjasmine/meta.yaml>`_

   


.. conda:package:: pbjasmine

   |downloads_pbjasmine| |docker_pbjasmine|

   :versions:
      
      

      ``26.1.3-0``,  ``26.1.2-0``,  ``2.7.99-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.0.0-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

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

    pixi global install pbjasmine

to add into an existing workspace instead, run::

    pixi add pbjasmine

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbjasmine

Alternatively, to install into a new environment, run::

    conda create -n envname pbjasmine

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbjasmine:<tag>

(see `pbjasmine/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbjasmine| image:: https://img.shields.io/conda/dn/bioconda/pbjasmine.svg?style=flat
   :target: https://anaconda.org/bioconda/pbjasmine
   :alt:   (downloads)
.. |docker_pbjasmine| image:: https://quay.io/repository/biocontainers/pbjasmine/status
   :target: https://quay.io/repository/biocontainers/pbjasmine
.. _`pbjasmine/tags`: https://quay.io/repository/biocontainers/pbjasmine?tab=tags


.. raw:: html

    <script>
        var package = "pbjasmine";
        var versions = ["26.1.3","26.1.2","2.7.99","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbjasmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbjasmine/README.html