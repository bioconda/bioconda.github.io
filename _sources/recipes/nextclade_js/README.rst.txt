:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextclade_js'
.. highlight: bash

nextclade_js
============

.. conda:recipe:: nextclade_js
   :replaces_section_title:
   :noindex:

   SARS\-CoV\-2 genome clade assignment\, mutation calling\, and sequence quality checks \(Javascript implementation\)

   :homepage: https://github.com/nextstrain/nextclade
   :license: MIT
   :recipe: /`nextclade_js <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade_js>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade_js/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`nextclade`

   


.. conda:package:: nextclade_js

   |downloads_nextclade_js| |docker_nextclade_js|

   :versions:
      
      

      ``0.14.4-0``,  ``0.14.3-0``,  ``0.14.2-0``

      

   
   :depends on nodejs: ``>12``
   :depends on nodejs: ``>=15.14.0,<16.0a0``

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

    pixi global install nextclade_js

to add into an existing workspace instead, run::

    pixi add nextclade_js

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextclade_js

Alternatively, to install into a new environment, run::

    conda create -n envname nextclade_js

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextclade_js:<tag>

(see `nextclade_js/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextclade_js| image:: https://img.shields.io/conda/dn/bioconda/nextclade_js.svg?style=flat
   :target: https://anaconda.org/bioconda/nextclade_js
   :alt:   (downloads)
.. |docker_nextclade_js| image:: https://quay.io/repository/biocontainers/nextclade_js/status
   :target: https://quay.io/repository/biocontainers/nextclade_js
.. _`nextclade_js/tags`: https://quay.io/repository/biocontainers/nextclade_js?tab=tags


.. raw:: html

    <script>
        var package = "nextclade_js";
        var versions = ["0.14.4","0.14.3","0.14.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextclade_js/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextclade_js/README.html